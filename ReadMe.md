# TESSA.COM - Personal Website

A beautiful, responsive static website created for Tessa with daily facts, games, and a fun evaluation form.

## ⚠️ Known Issues & Solutions

### Image Loading Issue
The `tessa.jpg` file is 4.1MB, which is too large for optimal web loading. This can cause:
- Slow page loading
- Image not displaying on slower connections
- Potential timeout issues

**Solutions:**
1. **Use the included image optimizer**: Open `image-optimizer.html` in your browser to compress the image
2. **Manual optimization**: Compress the image to under 500KB using any image editor
3. **Recommended size**: 800x600px at 80% quality should reduce it to ~100-300KB

### Spotify Link Issue
The song link now includes both Spotify and YouTube options for better compatibility.

## Features

## Features

- 🌅 Beautiful gradient design with modern UI
- 📱 Fully responsive for all devices
- 🎮 Interactive links to Wordle Italiano
- 📰 Feminist article section
- 📸 Image placeholder for daily pictures
- 📋 Comprehensive boyfriend evaluation form
- 🎨 Beautiful typography with Google Fonts

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy the project:
```bash
vercel
```

3. Follow the prompts to connect your GitHub account and deploy.

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a static HTML site
6. Click "Deploy"

### Option 3: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically deploy and provide you with a URL

## Customization

### Adding Images
To add Tessa's picture of the day, replace the image placeholder in the HTML:

```html
<div class="image-placeholder">
    <img src="path/to/your/image.jpg" alt="Tessa's Picture of the Day" style="max-width: 100%; height: auto; border-radius: 15px;">
</div>
```

### Updating Content
- Edit the daily facts in the `fact-card` sections
- Update the greeting message in the header
- Modify the evaluation form questions as needed

## File Structure

```
├── index.html              # Main website file
├── vercel.json             # Vercel configuration
├── tessa.jpg               # Tessa's image (4.1MB - needs optimization)
├── image-optimizer.html    # Tool to compress the image
└── README.md              # This file
```

## Technologies Used

- HTML5
- CSS3 (with modern features like gradients, backdrop-filter)
- JavaScript (minimal, for form handling)
- Google Fonts (Playfair Display & Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created with ❤️ for Tessa. 