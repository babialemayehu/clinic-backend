<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Clinic-{{$role}}</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="/css/material-icons.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
  <script src="/js/materialize.min.js" defer></script>
<script type="text/javascript" src="/js/{{$role}}/runtime.js"></script>
<script type="text/javascript" src="/js/{{$role}}/polyfills.js"></script>
<script type="text/javascript" src="/js/{{$role}}/styles.js"></script>
<script type="text/javascript" src="/js/{{$role}}/scripts.js"></script>
<script type="text/javascript" src="/js/{{$role}}/vendor.js"></script>
<script type="text/javascript" src="/js/{{$role}}/main.js"></script></body>
</html>
