document.getElementById('menuButton').addEventListener('click', function(event) {
    event.stopPropagation(); // 防止点击事件冒泡
    const drawer = document.getElementById('drawer');
    const isOpen = drawer.style.left === '0px';
    drawer.style.left = isOpen ? '-250px' : '0px';
    this.setAttribute('aria-expanded', !isOpen);
    document.getElementById('backButton').style.display = isOpen ? 'none' : 'block'; // 切换返回按钮的显示状态
});

document.getElementById('backButton').addEventListener('click', function(event) {
    event.stopPropagation(); // 防止点击事件冒泡
    const drawer = document.getElementById('drawer');
    drawer.style.left = '-250px';
    document.getElementById('menuButton').setAttribute('aria-expanded', 'false');
    this.style.display = 'none'; // 隐藏返回按钮
});

// Close the drawer when clicking outside of it
document.addEventListener('click', function(event) {
    const target = event.target;
    const menuButton = document.getElementById('menuButton');
    const drawer = document.getElementById('drawer');
    const backButton = document.getElementById('backButton');
    if (drawer.style.left === '0px' && !target.closest('.app-bar-container, .drawer')) {
        drawer.style.left = '-250px';
        menuButton.setAttribute('aria-expanded', 'false');
        backButton.style.display = 'none'; // 确保返回按钮也被隐藏
    }
});

// Go to homepage when clicking the title
document.getElementById('pageTitle').addEventListener('click', function(event) {
    event.stopPropagation(); // 防止点击事件冒泡
    window.location.href = '/';
});

var pdf1 = document.getElementById('pdf1');

// 为按钮添加点击事件监听器
pdf1.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會精神領袖評定行事規範（第三版）.pdf';
});
var epub1 = document.getElementById('epub1');

// 为按钮添加点击事件监听器
epub1.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會精神領袖評定行事規範（第三版）.epub';
});

var pdf2 = document.getElementById('pdf2');

// 为按钮添加点击事件监听器
pdf2.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會會員發展行事規範.pdf';
});
var epub2 = document.getElementById('epub2');

// 为按钮添加点击事件监听器
epub2.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會會員發展行事規範.epub';
});