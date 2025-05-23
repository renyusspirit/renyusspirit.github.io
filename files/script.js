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

var pdf3 = document.getElementById('pdf3');

pdf3.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會總章程（西貢七年修訂）.pdf';
});
var epub3 = document.getElementById('epub3');

// 为按钮添加点击事件监听器
epub3.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會總章程（西貢七年修訂）.epub';
});
var pdf4 = document.getElementById('pdf4');
// 为按钮添加点击事件监听器
pdf4.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇思想總綱.pdf';
});
var epub4 = document.getElementById('epub4');

// 为按钮添加点击事件监听器
epub4.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇思想總綱（西貢七年修訂）.epub';
});
var epub5 = document.getElementById('epub5');

// 为按钮添加点击事件监听器
epub5.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './The General Principles of Renyu\'s Thought.epub';
});
var epub6 = document.getElementById('epub6');

// 为按钮添加点击事件监听器
epub6.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './Les Principes Généraux de la Pensée de Renyu.epub';
});
var epub7 = document.getElementById('epub7');

// 为按钮添加点击事件监听器
epub7.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './La Ĝeneralaj Principoj de la Pensado de Renyu.epub';
});
var epub8 = document.getElementById('epub8');

// 为按钮添加点击事件监听器
epub8.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './精領光芒普照時.epub';
});
var gb = document.getElementById('gb');

// 为按钮添加点击事件监听器
gb.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = 'https://renyus-spirit-promoting-associat.gitbook.io/rspa/';
});

var pdf9 = document.getElementById('pdf9');

// 为按钮添加点击事件监听器
pdf9.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會解散行事規範.pdf';
});
var epub9 = document.getElementById('epub9');

// 为按钮添加点击事件监听器
epub9.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會解散行事規範.epub';
});

var pdf10 = document.getElementById('pdf10');

// 为按钮添加点击事件监听器
pdf10.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會行事規範章程.pdf';
});
var epub10 = document.getElementById('epub10');

// 为按钮添加点击事件监听器
epub10.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會行事規範章程.epub';
});

var pdf11 = document.getElementById('pdf11');

// 为按钮添加点击事件监听器
pdf11.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會資訊科技與資訊安全章程（臨時施行）.pdf';
});
var epub11 = document.getElementById('epub11');

// 为按钮添加点击事件监听器
epub11.addEventListener('click', function() {
    // 在这里编写您希望在点击按钮时执行的代码
    window.location.href = './仁宇精神推廣策進會資訊科技與資訊安全章程（臨時施行）.epub';
});