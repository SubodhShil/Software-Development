## MVT

Model View Template (MVT Pattern) 

1. Views: Contains various methods. Handles all logics.
2. Model: Database and database design.
3. Template: Frontend or client side.

## Virtual environment

A dedicated and isolated place for creating a project, where the packages don't access to the outer environment and vice versa.

1. Creating and naming virtual environment: `python -m venv name`
2. Activating virtual environment: `name\Scripts\activate`
3. To deactivate: `deactivate`

## Creating Django project and app

0. Install django in the virtual environment: `pip install django`
1. Project command: `django-admin startproject name`
2. App command: `django-admin startapp app_name`
3. Go to the django project folder: `cd name`
4. Run the project: `python manage.py runserver`

## Synchronous: No other work interrupts until current work finishes.

## Asynchronous: Multiple works can be done together.

> **A django project contains smaller and manageable parts call applications.**

-   App folder এর মধ্যে urls.py file থাকে না ।
-   একটা app বানানোর পর সবসময় app এর নাম project folder এর settings.py এর INSTALLED_APPS এর মধ্যে লিখতে হবে ।
- 