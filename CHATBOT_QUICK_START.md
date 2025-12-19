# 🚀 CHATBOT QUICK START - 3 MINUTE FIX

## The Problem (In Plain English)

You gave me a **management link** (with `/tasks`). This is like giving someone the admin password to your chatbot instead of the public chat link. Visitors can't use it without logging in.

## The Solution (3 Simple Steps)

### Step 1️⃣: Get Your Public Link (1 minute)

```
1. Go to: https://chat.lindy.ai
2. Sign in with your account
3. Click on: lexum-bridge-support-chatbot
4. Look for: "Lindy Embed" section
5. Find: "Public Link" button
6. Copy the URL (should end with /chat, not /tasks)
```

**Your public link will look like:**
```
https://chat.lindy.ai/fedi-bousetas-workspace/lexum-bridge-support-chatbot-69443ca8d2a1a4578d5f7d6a/chat
```

### Step 2️⃣: Update Your Website (1 minute)

**File to edit:** `components/shared/ChatbotWidget.tsx`

**Find this line:**
```typescript
const chatUrl = 'https://chat.lindy.ai/fedi-bousetas-workspace/lindy/lexum-bridge-support-chatbot-69443ca8d2a1a4578d5f7d6a/tasks'
```

**Replace with your public link from Step 1:**
```typescript
const chatUrl = 'https://chat.lindy.ai/fedi-bousetas-workspace/lexum-bridge-support-chatbot-69443ca8d2a1a4578d5f7d6a/chat'
```

**Save the file.**

### Step 3️⃣: Test It (1 minute)

```
1. Go to: https://lexum-bridge.lindy.site
2. Click the green chat button (bottom-right)
3. Chatbot should open WITHOUT login
4. Try typing a message
5. Done! ✅
```

---

## ✅ Verification Checklist

After updating:
- [ ] Green chat button visible
- [ ] "Live" badge showing
- [ ] Tooltip appears: "Need help? Chat with us!"
- [ ] Clicking button opens chatbot
- [ ] NO login screen appears
- [ ] Can type and chat immediately

---

## 🎯 Key Difference

| What You Had | What You Need |
|--------------|---------------|
| `/tasks` URL | `/chat` URL |
| Admin only | Public access |
| Requires login | No login needed |
| ❌ Doesn't work on website | ✅ Works on website |

---

## 📞 Still Stuck?

1. **Can't find public link?** → See CHATBOT_SETUP_GUIDE.md
2. **Getting login screen?** → You're using the wrong URL (still has `/tasks`)
3. **Chatbot blank?** → Refresh page, clear cache, try incognito mode

---

## 🎉 That's It!

Your chatbot will work perfectly once you use the public link instead of the admin link.

**Questions?** See the detailed guide: CHATBOT_SETUP_GUIDE.md
