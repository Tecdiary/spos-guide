---
outline: deep
---

# Developer Guide

SimplePOS v5 is developed using Laravel, Inertiajs & Vuejs.
The main page contents can be changed by editing `app/Http/Controllers/HomeController.php`

## Code Modifications

You can modify the PHP (Laravel) code as you need. If you modify the front-end code (Vuejs), Javascript `resources/js/` you will need to rebuild the app using `npm run build` after installing the dependencies with `npm i`

For development, you can use `npm run dev` and once all modifications done build the production version
with `npm run build` before deploying to your server.

#### Laravel

You can find the Laravel docs at <a href="https://laravel.com/docs" target="_blank">https://laravel.com/docs</a>

#### Inertiajs

You can find the Inertia docs at <a href="https://inertiajs.com/" target="_blank">https://inertiajs.com/</a>

#### Vuejs

You can find the Vuejs docs at <a href="https://vuejs.org/guide" target="_blank">https://vuejs.org/guide</a>

The vuejs app code is in the `resources/js/` folder. The page views are in the `resources/js/Pages/` folder while the layout files are in the '`resources/js/Layouts/`'

The helping file/functions are in the `resources/js/Core/` folder while the side bar menus are defined in the `resources/js/Core/menu.js` file.

## Adding Language

You can add language by following these steps.

1. Duplicate `lang/en.json` and `lang/en/` to your language then translate
2. Edit `lang/languages.json` and add your language entry
3. Build the application `npm i && npm run build`

## Setup CRON Job

As you know that SimplePOS is developer using Laravel. So, when using Laravel's scheduler, we only need to add a single cron configuration entry to our server that runs the `schedule:run` command every minute.

```sh
* * * * * php /path/to/upload/folder/artisan schedule:run >> /dev/null 2>&1
```

#### Running locally

The command below will run in the foreground and invoke the scheduler every minute until you terminate the command:

```sh
php artisan schedule:work
```

## Queue Configuration

Laravel allows you to easily create queued jobs that may be processed in the background. By moving time intensive tasks to a queue, your application can respond to web requests with blazing speed and provide a better user experience for you and your customers.

Laravel's queue configuration options are stored in your application's config/queue.php configuration file. You can set `QUEUE_CONNECTION` in the `.env` file. You can setup one of the following drivers:

`sync, database, beanstalkd, sqs, redis`

On cPanel you can add `QUEUE_ENABLE=false` in your .env file and setup the cron job as following

```sh
php /path/to/upload/folder/artisan queue:work --stop-when-empty
```

#### Running locally

The command below will start a queue worker and process new jobs as they are pushed onto the queue.

```sh
php artisan queue:work
```

Note that once the `queue:work` command has started, it will continue to run until it is manually stopped or you close your terminal.

---

::: warning Modify item code at your own risk
We don't offer support for modifications and modified versions. You are allowed to modify the item code as per license at your own risk.
:::

<!-- ## Support

We don't offer support for modifications and modified versions. You are allowed to modify the item code as per license at your own risk. -->
