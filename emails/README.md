# Email Marketing Campaigns

This directory contains email marketing campaign templates for Jameson & Company Dog Grooming.

## Structure

```
emails/
├── campaigns/          # Individual campaign templates
│   ├── january-2024.md
│   ├── february-2024.md
│   └── march-2024.md
├── templates/          # Reusable email templates (if needed)
└── README.md          # This file
```

## Campaign Files

Each campaign file includes:
- **Subject line** - Email subject
- **Campaign Type** - Type of campaign (announcement, educational, promotional, etc.)
- **Target Audience** - Who should receive this email
- **Personalization Variables** - Any variables like {{FirstName}} that need to be replaced
- **Email Content** - The full email body in markdown format

## Usage

### For Email Service Integration

These markdown files can be:
1. Converted to HTML for email clients
2. Used with email service providers (SendGrid, Mailchimp, etc.)
3. Integrated into your email sending system
4. Used as templates in your CMS or marketing platform

### Personalization Variables

Variables like `{{FirstName}}` should be replaced with actual customer data when sending:
- `{{FirstName}}` - Customer's first name
- `{{LastName}}` - Customer's last name
- `{{DogName}}` - Dog's name (if applicable)
- Add more as needed

### Converting to HTML

You can use markdown-to-html converters or email template builders to convert these to HTML email format.

## Adding New Campaigns

1. Create a new markdown file in `campaigns/` directory
2. Follow the same format as existing campaigns
3. Include all metadata (subject, type, audience, etc.)
4. Update `campaigns/index.json` with the new campaign
5. Update this README if needed

## Campaign Schedule

| Month | Campaign | Status |
|-------|----------|--------|
| January 2024 | Booking System Update | ✅ Ready |
| February 2024 | Nutrition Education | ✅ Ready |
| March 2024 | Seasonal Grooming | ✅ Ready |
