# LEXUM BRIDGE - Production Deployment Guide

## 🚀 Quick Start - Deployment Options

The website is **production-ready** and can be deployed to multiple platforms. Choose the option that best fits your needs.

---

## **Option 1: Vercel (Recommended - Easiest)**

Vercel is the official Next.js hosting platform with automatic deployments, SSL, and CDN.

### Steps:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/lexum-bridge.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain (e.g., lexumbridge.lu)
   - Update DNS records at your domain registrar
   - SSL certificate is automatic

4. **Environment Variables** (if needed)
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add any required variables
   - Redeploy

**Pros:**
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Automatic scaling
- ✅ Built-in analytics

**Cost:** Free tier available, paid plans start at $20/month

---

## **Option 2: Netlify**

Similar to Vercel, Netlify offers easy deployment with automatic SSL.

### Steps:

1. **Connect GitHub**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

3. **Add Domain**
   - Go to Domain settings
   - Add your custom domain
   - Update DNS records
   - SSL is automatic

**Pros:**
- ✅ Easy setup
- ✅ Free SSL
- ✅ Global CDN
- ✅ Form handling available

**Cost:** Free tier available, paid plans start at $19/month

---

## **Option 3: AWS (Scalable)**

For enterprise-level deployment with full control.

### Steps:

1. **Create AWS Account**
   - Go to https://aws.amazon.com
   - Create account and set up billing

2. **Deploy to AWS Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect GitHub repository
   - Configure build settings
   - Deploy

3. **Add Custom Domain**
   - In Amplify, go to Domain management
   - Add your domain
   - Update Route 53 DNS records
   - SSL is automatic

**Pros:**
- ✅ Enterprise-grade infrastructure
- ✅ Full control
- ✅ Scalable
- ✅ Integration with AWS services

**Cost:** Pay-as-you-go, typically $0-50/month for small sites

---

## **Option 4: Self-Hosted (Full Control)**

Deploy to your own server or VPS.

### Prerequisites:
- VPS or dedicated server (e.g., DigitalOcean, Linode, AWS EC2)
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy
- SSL certificate (Let's Encrypt - free)

### Steps:

1. **SSH into your server**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install dependencies**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   npm install -g pm2
   ```

3. **Clone repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/lexum-bridge.git
   cd lexum-bridge
   npm install
   npm run build
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "lexum-bridge" -- start
   pm2 startup
   pm2 save
   ```

5. **Configure Nginx**
   ```bash
   sudo apt-get install nginx
   ```
   
   Create `/etc/nginx/sites-available/lexum-bridge`:
   ```nginx
   server {
       listen 80;
       server_name lexumbridge.lu www.lexumbridge.lu;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d lexumbridge.lu -d www.lexumbridge.lu
   ```

7. **Enable Nginx site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/lexum-bridge /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

**Pros:**
- ✅ Full control
- ✅ No vendor lock-in
- ✅ Customizable

**Cost:** $5-20/month for VPS

---

## **Recommended: Vercel (Option 1)**

For most users, **Vercel is the best choice** because:
- ✅ Easiest setup (5 minutes)
- ✅ Automatic deployments
- ✅ Free SSL
- ✅ Global CDN
- ✅ Excellent performance
- ✅ Free tier available
- ✅ Scales automatically

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] **Domain registered** (e.g., lexumbridge.lu)
- [ ] **Email configured** (hello@lexumbridge.lu)
- [ ] **Phone number updated** (if needed)
- [ ] **LinkedIn profile linked** (update URL in Footer)
- [ ] **Brevo meeting link verified** (https://meet.brevo.com/lexum-bg)
- [ ] **Chatbot link verified** (Lindy chatbot URL)
- [ ] **Logo optimized** (already done)
- [ ] **Metadata updated** (in app/layout.tsx)
- [ ] **Environment variables set** (if any)

---

## 🔧 Post-Deployment Configuration

### 1. Update Metadata (app/layout.tsx)

Replace placeholder URLs with your actual domain:

```typescript
openGraph: {
  url: 'https://lexumbridge.lu',  // Update this
  // ...
}
```

### 2. Update Footer Links

In `components/layout/Footer.tsx`, update:
- LinkedIn URL
- Email address
- Phone number

### 3. Update Contact Section

In `components/sections/Contact.tsx`, update:
- Email address
- Phone number
- LinkedIn URL

### 4. Analytics (Optional)

Add Google Analytics:

```typescript
// In app/layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🔐 Security Checklist

- [ ] **SSL Certificate** - Automatic with Vercel/Netlify
- [ ] **HTTPS Redirect** - Automatic with Vercel/Netlify
- [ ] **Security Headers** - Add to next.config.ts if needed
- [ ] **Environment Variables** - Never commit secrets
- [ ] **Rate Limiting** - Consider for contact forms
- [ ] **CORS** - Already configured for Brevo

---

## 📊 Monitoring & Maintenance

### Vercel Dashboard
- Monitor performance metrics
- View error logs
- Check deployment history
- Manage environment variables

### Recommended Tools
- **Uptime Monitoring**: UptimeRobot (free)
- **Error Tracking**: Sentry (free tier)
- **Analytics**: Google Analytics (free)
- **Performance**: Vercel Analytics (included)

---

## 🚀 Deployment Steps Summary

### For Vercel (Recommended):

1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Click "Deploy"
5. Add domain in settings
6. Update DNS records
7. Done! 🎉

**Total time: ~10 minutes**

---

## 📞 Support

For deployment issues:
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Netlify Docs**: https://docs.netlify.com
- **AWS Docs**: https://docs.aws.amazon.com

---

## 📝 Environment Variables (if needed)

Create `.env.production` for production-specific variables:

```bash
# Example (not needed for this site currently)
NEXT_PUBLIC_API_URL=https://api.lexumbridge.lu
NEXT_PUBLIC_BREVO_URL=https://meet.brevo.com/lexum-bg
```

---

## ✅ Final Checklist

- [ ] Code is production-ready (build passes)
- [ ] All links are working
- [ ] Chatbot is functional
- [ ] Language switcher works
- [ ] Mobile responsive
- [ ] SEO metadata configured
- [ ] Domain registered
- [ ] Deployment platform chosen
- [ ] SSL certificate ready
- [ ] Monitoring tools configured

---

**Your website is ready for production! 🚀**

Choose your deployment platform and follow the steps above.

For questions, refer to the platform-specific documentation.
