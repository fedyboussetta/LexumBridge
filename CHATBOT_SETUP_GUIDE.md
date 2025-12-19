# 🤖 LEXUM BRIDGE CHATBOT SETUP GUIDE

## ⚠️ Current Issue

The chatbot link you provided (`https://chat.lindy.ai/fedi-bousetas-workspace/lindy/lexum-bridge-support-chatbot-69443ca8d2a1a4578d5f7d6a/tasks`) requires **authentication** to access. This is the admin/tasks URL, not the public chat link.

## ✅ Solution: Get Your Public Chatbot Link

Follow these steps to get a **public, unauthenticated** chatbot link that works on your website:

### Step 1: Go to Your Lindy Dashboard
1. Navigate to https://chat.lindy.ai
2. Sign in with your account
3. Go to your workspace: `fedi-bousetas-workspace`

### Step 2: Open Your Chatbot
1. Find your chatbot: `lexum-bridge-support-chatbot`
2. Click to open it
3. You should see the flow editor

### Step 3: Add/Configure Lindy Embed
1. In the flow editor, look for the **"Lindy Embed"** trigger/action
2. If it doesn't exist, add it:
   - Click "Add Trigger" or "Add Action"
   - Search for "Lindy Embed"
   - Select it
3. Configure the embed settings:
   - **Greeting message**: "Hello! How can we help you today?"
   - **Branding**: Customize as needed
   - **Domain**: Leave blank or add your domain (lexumbridge.lu)

### Step 4: Get the Public Link
1. In the Lindy Embed configuration panel, look for:
   - **"Public Link"** or **"Share Link"** button
   - **"Preview"** link
   - **"Copy embed code"** option
2. You should see a URL like:
   ```
   https://chat.lindy.ai/[workspace]/[chatbot-id]/chat
   ```
   OR
   ```
   https://chat.lindy.ai/[workspace]/[chatbot-id]
   ```
3. **Copy this public link** (NOT the /tasks URL)

### Step 5: Update Your Website
1. Open the file: `components/shared/ChatbotWidget.tsx`
2. Find this line:
   ```typescript
   const chatUrl = 'https://chat.lindy.ai/fedi-bousetas-workspace/lindy/lexum-bridge-support-chatbot-69443ca8d2a1a4578d5f7d6a/tasks'
   ```
3. Replace it with your public link:
   ```typescript
   const chatUrl = 'https://chat.lindy.ai/[YOUR-PUBLIC-LINK-HERE]'
   ```
4. Save the file
5. Refresh your website

### Step 6: Test the Chatbot
1. Go to your website: https://lexum-bridge.lindy.site
2. Click the green floating chat button in the bottom-right corner
3. The chatbot should open in a new window WITHOUT requiring login
4. You should be able to chat immediately

---

## 🔍 How to Find Your Public Link

### Method 1: From Lindy Embed Configuration
1. Open your chatbot in Lindy
2. Find the "Lindy Embed" trigger/action
3. Look for a **"Public Link"** or **"Share"** button
4. Copy the URL

### Method 2: From Preview
1. In Lindy Embed settings, click **"Preview"**
2. A new window opens with your public chat
3. Copy the URL from the address bar
4. This is your public link!

### Method 3: Manual Construction
If you can't find the public link, you can construct it:
- Format: `https://chat.lindy.ai/[workspace]/[chatbot-id]/chat`
- Example: `https://chat.lindy.ai/fedi-bousetas-workspace/lexum-bridge-support-chatbot-69443ca8d2a1a4578d5f7d6a/chat`

---

## ✅ Verification Checklist

After updating the link, verify:

- [ ] Chatbot button is visible in bottom-right corner
- [ ] Button shows "Live" badge
- [ ] Tooltip appears after 3 seconds: "Need help? Chat with us!"
- [ ] Clicking button opens chatbot in new window
- [ ] Chatbot loads WITHOUT login screen
- [ ] You can type and chat immediately
- [ ] Works on mobile and desktop
- [ ] Works in different browsers

---

## 🚀 Alternative: Embed as Popup on Website

If you want the chatbot to appear as a popup widget directly on your website (instead of opening in a new window), you can use the **Lindy Embed popup code**:

### Step 1: Get Embed Code
1. In Lindy Embed settings, look for **"Embed Code"** or **"Copy Code"**
2. You'll get HTML code like:
   ```html
   <script src="https://chat.lindy.ai/embed.js"></script>
   <script>
     LinydEmbed.init({
       chatbotId: 'YOUR_CHATBOT_ID',
       workspaceId: 'YOUR_WORKSPACE_ID'
     })
   </script>
   ```

### Step 2: Add to Website
1. Open `app/layout.tsx`
2. Add the embed code to the `<body>` section
3. Save and refresh

### Step 3: Configure Domain
1. In Lindy Embed settings, set **Domain Name** to your website domain
2. Example: `lexumbridge.lu`
3. This allows the embed to work on your domain

---

## 📞 Troubleshooting

### Issue: "Sign in to your account" appears
**Solution**: You're using the wrong URL. Use the **public link**, not the `/tasks` URL.

### Issue: Chatbot doesn't load
**Solution**: 
1. Check the URL is correct
2. Verify the chatbot is published in Lindy
3. Check browser console for errors (F12)
4. Try in a different browser

### Issue: Popup blocked
**Solution**: The browser blocked the popup. Users need to allow popups for your domain.

### Issue: Chatbot appears blank
**Solution**:
1. Refresh the page
2. Clear browser cache
3. Try in incognito/private mode
4. Check Lindy dashboard to ensure chatbot is active

---

## 🔗 Useful Links

- **Lindy Dashboard**: https://chat.lindy.ai
- **Lindy Embed Docs**: https://docs.lindy.ai/skills/by-lindy/lindy-embed
- **Lindy Academy**: https://www.lindy.ai/academy-lessons/embed-lindy-on-your-website

---

## 📝 Quick Reference

| Item | Value |
|------|-------|
| **Workspace** | fedi-bousetas-workspace |
| **Chatbot Name** | lexum-bridge-support-chatbot |
| **Current URL** | https://chat.lindy.ai/fedi-bousetas-workspace/lindy/lexum-bridge-support-chatbot-69443ca8d2a1a4578d5f7d6a/tasks |
| **File to Update** | components/shared/ChatbotWidget.tsx |
| **Line to Change** | Line with `const chatUrl = ...` |
| **Website** | https://lexum-bridge.lindy.site |

---

## ✅ After Setup

Once you have the public link:

1. Update `ChatbotWidget.tsx` with your public link
2. Refresh the website
3. Test the chatbot button
4. Verify it works without login
5. Deploy to production

---

**Your chatbot will be fully functional once you use the public link instead of the /tasks URL!** 🚀
