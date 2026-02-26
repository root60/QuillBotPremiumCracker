
# QuillBot Premium Cracker - By RedHydra

## 🚀 Enhanced QuillBot Extension

A beautifully modern QuillBot Premium Cracker with a clean, sleek, and futuristic interface, featuring smooth graphical animations.

---

## 🖼️ Logo

![Logo](https://i.ibb.co/NdcX02sV/logo.png =150x)  
*Logo showcasing the futuristic theme*.

---

## ✨ Features

- **🌟 Modern User Interface**: A sleek, modern design for a premium feel.
- **⚡ Smooth Animations**: Seamless transitions, hover effects, and animations.
- **📱 Fully Responsive**: Perfect experience across desktop and mobile screens.
- **♿ Accessibility**: High contrast mode and reduced motion for better accessibility.
- **🎯 Enhanced Focus**: Improved focus indicators for better navigation.

---

## 📦 Installation

Follow these steps to install the extension:

1. Download the extension files from the repository.
2. Open `chrome://extensions/` in Google Chrome.
3. Enable **Developer mode** at the top right.
4. Click **Load unpacked** and select the folder containing the extension files.
5. The extension will be installed, and you can start using QuillBot with the enhanced features.

---

## 📸 Screenshots

### Main Page UI:
![Screenshot 1](https://i.ibb.co/VYgJCLhD/ss1.png)

### Feature Interface:
![Screenshot 2](https://i.ibb.co/Q3znwN5F/ss2.png)

### Settings Page:
![Screenshot 3](https://i.ibb.co/MyYJhVNK/ss3.png)

---

## 🎨 Theme Details

### Color Palette
- **Primary Background**: `#1b1b2f` (Dark Night Blue)
- **Secondary Background**: `#16213e` (Deep Blue)
- **Accent Color**: `#00c2ff` (Electric Blue)
- **Text Color**: `#ffffff` (White)

### Design Elements
- Minimalistic design
- Glowing interactive elements
- Smooth animations and hover effects

---

## 💻 Graphical Animations (Using JS & CSS)

To enhance the **QuillBot Premium Cracker** interface with interactive animations, you can follow these steps:

### 1. Glowing Button Hover Effect (CSS)
We will start by adding a glowing hover effect on buttons to make the UI feel more interactive.

```html
<style>
  /* Button Styling */
  .btn {
    padding: 14px 30px;
    background: linear-gradient(45deg, #00ffff, #00cccc);
    color: #0a0a1a;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);
    transition: all 0.3s ease;
  }

  .btn:hover {
    background: linear-gradient(45deg, #00cccc, #00ffff);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.5);
    transform: scale(1.1);
  }
</style>

<button class="btn">Hover Me</button>
```

### 2. Animation on Page Load (CSS)
Make the page elements "fade-in" and scale up as the user visits the page.

```html id="1s35jq"
<style>
  /* Fade-in and Scale Effect */
  body {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
</style>
```

### 3. Floating Animation Effect (CSS)
A floating animation effect that makes the elements on the page feel alive and moving.

```html id="ta4pwn"
<style>
  /* Floating Animation */
  .floating {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
</style>

<div class="floating">Floating Element</div>
```

### 4. Interactive Scroll Animation (JS & CSS)
Create an effect that triggers animations when the user scrolls to a certain section of the page.

```html id="re3afz"
<style>
  /* Initial Hidden State */
  .scroll-animation {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease-out;
  }

  .scroll-animation.show {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<div class="scroll-animation" id="scrollElement">
  <p>This element fades and slides into view when you scroll.</p>
</div>

<script>
  // JavaScript to detect scroll and trigger the scroll animation
  window.addEventListener('scroll', () => {
    const element = document.getElementById('scrollElement');
    const position = element.getBoundingClientRect();

    // Check if the element is in view
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('show');
    }
  });
</script>
```

---

## 🔧 Technical Details

- **Manifest Version**: 3
- **CSS Injection**: Automatically applies the modern theme to QuillBot's website.
- **Animations**: Utilizes CSS3 keyframes and transitions for smooth effects.
- **Permissions**: Uses `cookies`, `storage`, and `tabs` for enhanced functionality.
- **Web Access**: The extension applies its features on `https://quillbot.com/*`.

---

## 📄 License

This version enhances the original QuillBot Premium Cracker. It’s intended for educational purposes. Enjoy the improved functionality and modern interface.

---

## 📣 Credits

- **Original Extension**: Based on QuillBot Premium Cracker
- **Design**: Modern interface by RedHydra
- **Icons**: Custom icons for a sleek, modern look
- **CSS Framework**: Custom theme with futuristic UI elements

---

**Enjoy your enhanced QuillBot Premium experience!** 🎮✨
