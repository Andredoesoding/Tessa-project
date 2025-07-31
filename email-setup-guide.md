# Email Setup Guide for Tessa.com

## Option 1: EmailJS (Recommended - 100% Static)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Boyfriend Evaluation from {{to_name}}

**Body:**
```
New evaluation submitted on {{date}}

**Personal Information:**
Name: {{to_name}}
Relationship Duration: {{duration}}
Pet Name: {{pet}}
Sign: {{sign}}

**Evaluation Results:**
1. Communication: {{communication}}/5
2. Effort & Support: {{effort}}/5
3. Romance & Affection: {{romance}}/5
4. Conflict Resolution: {{conflict}}/5
5. Reliability & Trust: {{reliability}}/5
6. Pound-town: {{poundtown1}}/5
7. Physique: {{poundtown2}}/5
8. Activities: {{poundtown3}}/5

**Bonus Questions:**
Best Quality: {{best_quality}}
Improvement Needed: {{improvement}}
Would Date Again: {{date_again}}

**Final Verdict:** {{final_verdict}}

**Signed:** {{signature}}
**Date:** {{date}}
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### Step 5: Update Your Code
Replace the placeholders in `index.html`:
- `YOUR_PUBLIC_KEY_HERE` → Your public key
- `YOUR_SERVICE_ID` → Your service ID
- `YOUR_TEMPLATE_ID` → Your template ID

### Step 6: Test
1. Deploy to Vercel
2. Fill out the form
3. Check your email!

---

## Option 2: Formspree (Even Simpler)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io/)
2. Sign up for free
3. Create a new form

### Step 2: Update HTML
Replace the form tag in `index.html`:
```html
<form id="evaluationForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Step 3: Remove JavaScript
Delete the EmailJS code and keep only:
```javascript
document.getElementById('evaluationForm').addEventListener('submit', function(e) {
    // Form will submit automatically to Formspree
});
```

---

## Pricing Comparison

| Service | Free Tier | Paid Plans |
|---------|-----------|------------|
| EmailJS | 200 emails/month | $15/month for 1,000 emails |
| Formspree | 50 submissions/month | $8/month for 1,000 submissions |
| Netlify Forms | 100 submissions/month | $19/month for 1,000 submissions |

---

## Recommendation
**Use EmailJS** because:
- ✅ 100% static (no server needed)
- ✅ More emails in free tier
- ✅ Better customization
- ✅ Works perfectly with Vercel
- ✅ Professional email templates 