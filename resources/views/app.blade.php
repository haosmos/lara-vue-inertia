<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lara-vue3!</title>
    @vite('resources/js/app.js')
    @inertiaHead
</head>
<body>
    @inertia
    <div>
        <p>
            hello world!!!
        </p>
    </div>
</body>
</html>
