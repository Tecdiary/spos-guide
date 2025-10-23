---
outline: deep
---

# User Guide

The design of SimplePOS features a straightforward and intuitive user interface. We will guide you through the setup process step by step.

After installation, you should

1. Add Category
2. Add Customer
3. Add User Role for Staff
4. Save Settings (mail, booking, scale barcode and payments)
5. Add taxes and products
6. Start creating sales and purchase order

## Home Page

**_(When Booking Enabled)_**

![Homepage SimplePOS Booking](./public/Home%20-%20SimplePOS.jpeg)

The home page contents can be edited in `app/Http/Controllers/HomeController.php` file.

> If you don't need appointment bookings then you can disable it in settings.

![Homepage SimplePOS Booking](./public/Home%20Page%20Code.png)

## Client Booking Process

#### Step 1: select store

![Dashboard](./public/Booking%20-%20Store%20-%20SimplePOS.jpeg)

#### Step 2: select service

![Dashboard](./public/Booking%20-%20Service%20-%20%20SimplePOS.jpeg)

#### Step 3: select date

![Dashboard](./public/Booking%20-%20Date%20-%20SimplePOS.jpeg)

#### Step 4: select time

![Dashboard](./public/Booking%20-%20Time%20-%20SimplePOS.jpeg)

#### Step 5: contact form

![Dashboard](./public/Booking%20-%20Contact%20-%20SimplePOS.jpeg)

#### Step 6: confirm (payment)

![Dashboard](./public/Booking%20-%20Confirm%20-%20SimplePOS.jpeg)

The admin design has three sections.

1. Top bar (logo and quick menus)
2. Left side bar (all the menu)
3. Page content area.

## Dashboard

![Dashboard](./public/Dashboard%20-%20SimplePOS.png)

Dashboard has sales overview at top then ten latest sales and 3 latest customers. The overview sales can have three options to choose from i. 7 days (default) ii. 30 days iii. All time

## Table Design

![Dashboard](./public/Sales%20-%20SimplePOS.png)

All the record on listing page are shown in the table and the contents has following sections

1. Header for the page
2. Filters, Search and Action button at right.
3. Table for records
4. Table info and the pagination

::: warning Soft Delete
All the records in SimplePOS are soft delete means they will not be delete from database unless you delete them permanently. So every table has the Trashed filter to view the active (not trashed), active and deleted (with trashed) and delete (only trashed) options to choose from.
:::

## Store Selection

![Dashboard](./public/Select%20Store.png)

To access any the following page, you will need to select the store first.

- Sales
- Bookings
- Expenses
- Payments
- Purchases
- Adjustments
- Return Orders

## Products

![Dashboard](./public/Products%20-%20SimplePOS.png)

SimplePOS offers comprehensive product and service management, allowing you to set different prices and taxes for each store. You can easily organize products into categories, view and edit details such as name, price, and stock levels, and streamline inventory tracking.

With support for tax settings, you can apply appropriate tax rates to individual products based on location and business needs. This feature helps ensure compliance with local tax regulations and simplifies tax management.

Additionally, SimplePOS includes product label and barcode printing, making product identification and checkout processes efficient and accurate.

![Dashboard](./public/Add%20Product%20-%20SimplePOS.png)

## Sales

SimplePOS makes it simple to manage the full sales lifecycle, from creating new orders to finalizing transactions and updating inventory.

![Dashboard](./public/Sales%20-%20SimplePOS.png)

## Purchases

Simplify the process of ordering products from suppliers. Create orders based on your current stock levels and desired quantities.

## Expenses

Business expenses are the costs incurred in the ordinary course of running a business. These expenses are necessary for the business to operate and can typically be deducted from the business's income. Track your Business expenses and generate reports whenever you need them.

## Adjustments & Return Order

SimplePOS allows you to adjust stock levels for any store, accept customer returns, and manage returns to suppliers. These actions will automatically sync with your inventory.

## Bookings & Calender

SimplePOS offers a robust appointment booking and calendar management system, ideal for spas, salons, and similar businesses, enabling clients to schedule appointments online and streamlining the scheduling process.

![Dashboard](./public/Calendar%20-%20SimplePOS.png)

## Customer & Supplier

SimplePOS has a feature to manage customers and suppliers, allowing users to record names and contact details for efficient communication and accurate record-keeping.

![Dashboard](./public/Customers%20-%20SimplePOS.png)

## Users & Roles

SimplePOS provides robust staff management features, allowing you to create and manage individual staff accounts. It also offers customizable user roles to control permissions and access levels for different users.

![Dashboard](./public/Permissions%20-%20SimplePOS.png)

## Settings

SimplePOS includes settings for easy management and configuration of the application, such as site name customization, number formatting, scale barcode configuration, email configuration, theme customization, booking and payment settings.

![Dashboard](./public/Settings%20-%20SimplePOS.png)

## Reports

![Dashboard](./public/Daily%20Sales%20-%20SimplePOS.png)
![Dashboard](./public/Monthly%20Sales%20-%20SimplePOS.png)
![Dashboard](./public/Best%20Sellers%20-%20SimplePOS.png)

The beta release has the following reports and we will add more in future.

1. Daily Sales Report
2. Monthly Sales Report
3. Sales Report
4. Purchases Report
5. Expenses Report
6. Return Orders Report
7. Best Sellers
8. Products Report
9. Categories Report
10. Adjustments Report
11. Customers Report
12. Registers Report
13. Activities Report

::: info Customize Reports
Each report except daily & monthly sale has the customize button to get the desired report for store, user or any other field.
:::

::: warning Support
If you didn't find answer here, please ask questions at support portal [https://tecdiary.net/support](https://tecdiary.net/support)
:::
