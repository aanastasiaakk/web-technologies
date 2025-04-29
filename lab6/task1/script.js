        const productList = document.getElementById('product-list');
        const emptyListMessage = document.getElementById('empty-list');
        const addProductBtn = document.getElementById('add-product-btn');
        const productModal = document.getElementById('product-modal');
        const productForm = document.getElementById('product-form');
        const closeBtn = document.querySelector('.close');
        const snackbar = document.getElementById('snackbar');
        const totalPriceElement = document.getElementById('total-price');

        let products = [];
        let filteredProducts = [];
        let originalProducts = [];

        function renderProducts(productsToRender) {
            productList.innerHTML = '';
            if (productsToRender.length === 0) {
                emptyListMessage.style.display = 'block';
            } else {
                emptyListMessage.style.display = 'none';
                productsToRender.forEach(product => {
                    const productCard = document.createElement('li');
                    productCard.classList.add('product-card');
                    productCard.dataset.id = product.id;
                    productCard.innerHTML = `
                        <img src="${product.imageUrl}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>ID: ${product.id}</p>
                        <p>Ціна: ${product.price} грн</p>
                        <p>Категорія: ${product.category}</p>
                        <button class="delete-btn" data-id="${product.id}">Видалити</button>
                        <button class="edit-btn" data-id="${product.id}">Редагувати</button>
                    `;
                    productList.appendChild(productCard);
                    setTimeout(() => productCard.classList.add('fade-in'), 10);
                });
            }
            updateTotalPrice();
        }

        function openModal(product = null) {
            productModal.style.display = 'block';
            if (product) {
                document.getElementById('product-id').value = product.id;
                document.getElementById('product-name').value = product.name;
                document.getElementById('product-price').value = product.price;
                document.getElementById('product-category').value = product.category;
                document.getElementById('product-image').value = product.imageUrl;
            } else {
                document.getElementById('product-id').value = '';
                document.getElementById('product-name').value = '';
                document.getElementById('product-price').value = '';
                document.getElementById('product-category').value = 'Електроніка';
                document.getElementById('product-image').value = '';
            }
        }

        function closeModal() {
            productModal.style.display = 'none';
        }

        function showSnackbar(message) {
            snackbar.textContent = message;
            snackbar.classList.add('show');
            setTimeout(() => {
                snackbar.classList.remove('show');
            }, 3000);
        }

        function updateTotalPrice() {
            const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
            totalPriceElement.textContent = totalPrice;
        }

        function addNewProduct(event) {
            event.preventDefault();
            const name = document.getElementById('product-name').value;
            const price = parseFloat(document.getElementById('product-price').value);
            const category = document.getElementById('product-category').value;
            const imageUrl = document.getElementById('product-image').value;

            const product = { id: Date.now(), name, price, category, imageUrl };
            products.push(product);
            showSnackbar(`Товар ${name} додано.`);
            closeModal();
            renderProducts(products);
        }

        function updateProduct(event) {
            event.preventDefault();
            const id = parseInt(document.getElementById('product-id').value);
            const name = document.getElementById('product-name').value;
            const price = parseFloat(document.getElementById('product-price').value);
            const category = document.getElementById('product-category').value;
            const imageUrl = document.getElementById('product-image').value;

            const product = { id, name, price, category, imageUrl };
            products = products.map(p => p.id === id ? product : p);
            showSnackbar(`Товар ${name} (ID: ${id}) оновлено.`);
            closeModal();
            renderProducts(products);
        }

        function deleteProduct(productId) {
            const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
            if (productCard) {
                productCard.classList.add('fade-out');
                productCard.addEventListener('animationend', () => {
                    products = products.filter(product => product.id !== productId);
                    showSnackbar('Товар видалено.');
                    renderProducts(products);
                });
            }
        }

        function handleFilter(category) {
            if (category === 'Усі') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }
            renderProducts(filteredProducts);
        }

        function handleSort(sortType) {
            switch (sortType) {
                case 'price':
                    products.sort((a, b) => a.price - b.price);
                    break;
                case 'creationDate':
                    products.sort((a, b) => a.id - b.id);
                    break;
                case 'updateDate':
                    products.sort((a, b) => b.id - a.id);
                    break;
            }
            renderProducts(products);
        }

        function resetSort() {
            products.sort((a,b) => a.id-b.id);
            renderProducts(products);
        }

        addProductBtn.addEventListener('click', () => openModal());
        closeBtn.addEventListener('click', closeModal);
        productForm.addEventListener('submit', (event) => {
            if (document.getElementById('product-id').value) {
                updateProduct(event);
            } else {
                addNewProduct(event);
            }
        });

        productList.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-btn')) {
                deleteProduct(parseInt(event.target.dataset.id));
            } else if (event.target.classList.contains('edit-btn')) {
                const product = products.find(p => p.id === parseInt(event.target.dataset.id));
                openModal(product);
            }
        });

        document.querySelectorAll('.filter-buttons button').forEach(button => {
            button.addEventListener('click', () => handleFilter(button.dataset.category));
        });

        document.querySelectorAll('.sort-buttons button').forEach(button => {
            button.addEventListener('click', () => handleSort(button.dataset.sort));
        });

        document.getElementById('reset-sort').addEventListener('click', () => resetSort());

        renderProducts(products);
    