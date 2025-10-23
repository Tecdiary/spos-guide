---
outline: [2, 3]
---

# Installation

### Requirements:

**PHP8.3+ (PHP8.4 default)**

\*_MySQL 5.7.10+ (MySQL 8 recommended)_, MariaDB 10.3+\*

## Installation Guide

Please follow the installation steps below

1. Please upload all the files & folders to your server.
2. Please set the root path of domain/subdomain to `public` folder in your uploaded files and for subfolder, you need to redirect all traffic to `public` folder.

   ::: danger Security Check
   Please don’t allow web access to the folder in which you have uploaded files. Only `public` folder should be allowed in web access.
   :::

3. You can access the installer by adding `/install` at the end of your domain URL in browser.

   > `https://yourdomain.com/install`

   > `https://yourdomain.com/subfolder/install`

   > `https://subdomain.yourdomain.com/install`

   ::: warning Download doesn't have install folder
   `install` is not a folder name but a route.
   :::

4. Please prepare these details (mentioned at installation step 1)
5. If installer give any `server error`, please check (step 3).
   You can check server error logs and the Laravel logs in the `storage/logs/` folder.
   If you are not sure, you can check with your server admin.
6. Please provide the details of your purchase, database, mail and user account (step 3).

   > For purchase verification, the username is Envato username that you use to login to codecanyon.net and themeforest.net while the purchase code is in your license file, please download the license to get purchase code.

   > You can create database & user at your server, if you are not sure please check with server admin.

7. Finalize the installation (final step 4).

## Update Guide

::: danger Can't update v4 to v5
We are sorry but the version 5 is not completable with version 4, so please install version 5 and import the products, customers, and update settings to use the new version.
:::

### Update v5 to the latest release

::: warning Backup First!
Please backup your database, `.env` file, `public/asset` and `storage/app` folders.
:::

1. Upload the **_latest files & folders_** to replace the old ones.

2. Run the **_migration command_**

   ```sh
   # cd /path/to/uploaded/folder
   php artisan migrate --force

   ```

   ::: info Info!
   If you get the output `INFO  Nothing to migrate.` then you are fine as there is no database change made in the current update.
   :::

3. Restore the `.env`, `public/asset` and `storage/app` folders.

::: info Didn't understand any step?
If you need further assistance, please validate your purchase code at [support portal](https://tecdiary.com/support) and ask question there.
:::

## FAQs

### Can't access /install

#### Why I can't access the `/install` route in browser?

Please make sure that

1. You have uploaded the file to correct folder.
2. The domain/subdomain root path has been set correctly to `public` folder.
3. If you are installing in subfolder then make sure you are forwarding the traffic to `public` folder.
4. Check that `mod_rewrite` is enabled and configured to use the `.htaccess` file from site folder.
5. Make sure that you server meets the php and mysql requirements mention above.

### White page at /install

#### Why I see nothing on `/install` route but blank White page?

Please check your server error logs for details. You can check Laravel logs in the `storage/logs/` folder too. Once you have the error details, please ask question at support portal <a href="https://tecdiary.net/support" target="_blank">https://tecdiary.net/support</a>

## Support

Each purchase comes with free six months support. If you need assistance, please validate your purchase code at support portal <a href="https://tecdiary.net/support" target="_blank">https://tecdiary.net/support</a> and ask question there.
