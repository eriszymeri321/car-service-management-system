# Car Service Management System

I have recently been working on this project: a web application for managing the day-to-day work of an automotive service center. The project is still under development and is not a final release. Features, design, and setup instructions may change as work continues.

## What it does

The application brings service-center tasks into one place:

- Administrators can manage customers and their vehicles, record service work, track work status, and review service requests.
- Customers can create an account, register their vehicles, request an appointment, and view their own vehicle and service history through a customer portal.
- The system can keep maintenance reminders, show workshop and financial summaries, and generate invoices for completed services.
- A rule-based assistant can suggest possible causes and safety guidance from a text description of vehicle symptoms. Risk estimates are also rule-based prototypes. They are not produced by a trained machine-learning model and do not replace a mechanic's inspection.

## How it works

The PHP application handles page rendering, form submissions, login, role-based access, and the service-management logic. It uses PDO to connect to a MySQL or MariaDB database. Administrators and customers have different views and permissions; customers can access only the vehicles and records associated with their account. HTML and CSS provide the interface, while a small JavaScript file handles a few navigation interactions.

The assistant currently uses local rules and keywords. It does not send symptom descriptions to an external AI service. Financial totals are based on information entered into the system; the application does not process real payments.

## Technology

- PHP 8+
- MySQL or MariaDB, accessed with PDO
- HTML and CSS
- JavaScript for limited interface interactions
- XAMPP can be used as a local Apache/PHP/MySQL development environment

## Who can use or contribute

This project may be useful to small automotive workshops that want to organize customer, vehicle, appointment, maintenance, and service records. It can also be used by developers and students who want to explore or contribute to a PHP/MySQL web application.

Contributions and suggestions are welcome. To work on the project, fork the repository, create a branch for your change, make and locally review your update, then open a pull request describing what you changed. Please avoid committing real customer information, passwords, or other secrets.

## Run locally

### Requirements

- PHP 8 or newer with PDO MySQL enabled
- MySQL or MariaDB
- Apache, or PHP's built-in development server

### Setup

1. Clone or download the project into your local development environment.
2. Copy `config/database.example.php` to `config/database.php`, then set the connection values (`DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, and `DB_PASS`) for your local database.
3. Make sure the database has the tables expected by the application. The repository currently does not include a standalone SQL schema or database migration setup, so database initialization may require additional setup.
4. Serve the project using Apache, or run `php -S localhost:8000` from the project directory and open `http://localhost:8000`.

The application can use `data/servis.json` as a legacy import or backup source when initializing an empty database. The JSON file is not the primary data store once the application is connected to MySQL/MariaDB.

The current development configuration contains a demo administrator account (`admin` / `servis2026`). Change demo credentials and database settings before using the application with real data. Do not use the demo account in a production deployment.

## Project layout

- `index.php` — application routing, form handling, and core logic
- `config/database.php` — database connection settings
- `views/` — customer portal and administrative views
- `assets/style.css` — application styles
- `assets/app.js` — small interface interactions
- `data/servis.json` — legacy import and optional backup data
- `icon/` — vehicle and brand image assets

## Development status

This is an ongoing project and should be considered a work in progress. It has not reached a final version. Setup, database initialization, security hardening, testing, and new features may still need further development before it is ready for production use.
