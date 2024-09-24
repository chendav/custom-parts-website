const translations = {
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "slogan": "One-Stop Shop for Custom Parts",
        "sub-slogan": "From imagination to reality, all in one place",
        "our-services": "Our Services",
        "plastic-parts": "Plastic Parts",
        "plastic-description": "Custom plastic parts for various applications",
        "metal-processing": "Metal Processing",
        "metal-description": "Precision metal parts and components",
        "pcb-customization": "PCB Customization",
        "pcb-description": "Tailored PCB design and manufacturing",
        "contact-us": "Contact Us",
        "name": "Name:",
        "email": "Email:",
        "requirement": "Requirement Description:",
        "submit": "Submit Inquiry",
        "rights": "All rights reserved.",
        "get-started": "Get Started",
        "other-services": "Other Services",
        "other-description": "Additional customization options available",
        "one-stop-title": "One-Stop Custom Parts Solution",
        "one-stop-description": "We offer a comprehensive one-stop service for all your custom parts needs. From plastic to metal, PCB to other specialized components, get everything you need in one place without the hassle of dealing with multiple suppliers.",
        "one-stop-benefit-1": "Save time and effort",
        "one-stop-benefit-2": "Consistent quality across all parts",
        "one-stop-benefit-3": "Streamlined communication",
        "one-stop-benefit-4": "Optimized for cost-efficiency",
        "get-quote": "Get a Quote",
        "learn-more": "Learn More"
    },
    zh: {
        "nav-home": "首页",
        "nav-services": "服务",
        "nav-contact": "联系我们",
        "slogan": "定制零件一站式商店",
        "sub-slogan": "从想象到现实，一站搞定",
        "our-services": "我们的服务",
        "plastic-parts": "塑料零件",
        "plastic-description": "各种应用的定制塑料零件",
        "metal-processing": "金属加工",
        "metal-description": "精密金属零件和组件",
        "pcb-customization": "PCB板定制",
        "pcb-description": "定制PCB设计和制造",
        "contact-us": "联系我们",
        "name": "姓名：",
        "email": "邮箱：",
        "requirement": "需求描述：",
        "submit": "提交需求",
        "rights": "版权所有。",
        "get-started": "立即开始",
        "other-services": "其他服务",
        "other-description": "提供额外的定制选项",
        "one-stop-title": "一站式定制零件解决方案",
        "one-stop-description": "我们为您的所有定制零件需求提供全面的一站式服务。从塑料到金属，从PCB到其他专业组件，在一个地方获得您需要的一切，无需费心与多个供应商打交道。",
        "one-stop-benefit-1": "节省时间和精力",
        "one-stop-benefit-2": "所有零件质量一致",
        "one-stop-benefit-3": "简化沟通流程",
        "one-stop-benefit-4": "优化成本效益",
        "get-quote": "获取报价",
        "learn-more": "了解更多"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('.lang');
    elements.forEach((element) => {
        const key = element.getAttribute('key');
        element.textContent = translations[lang][key];
    });
    document.getElementById('languageToggle').textContent = lang === 'en' ? '中文' : 'English';
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');  // 设置默认语言为英文

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // 这里可以添加表单提交逻辑，如果需要的话
        alert(currentLang === 'en' ? 'Thank you for your submission!' : '感谢您的提交！');
        form.reset();
    });
});
