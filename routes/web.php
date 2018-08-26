<?php

Route::get('/test', function(){
    return view('index'); 
}); 

Route::middleware(['auth'])->group(function () {
    Route::get('/home', 'HomeController@index')->name('home');
});
Route::prefix('ajax')
    ->namespace('AccountManagment')
    ->middleware(['cors'])
    ->group(function(){
        Route::prefix('get')->group(function(){
            Route::get('roles except admin', 'RoleController@getRolesExceptAdmin');
            Route::get('auth user', 'UserController@authUser'); 
        }); 
        Route::prefix('post')->group(function(){
            Route::post('create user', 'UserController@store'); 
        }); 
}); 


Route::namespace('Auth')->group(function(){
    // AUTHENTICATION
    Route::get('/', 'LoginController@showLoginForm')->name('login');
    Route::post('/', 'LoginController@ajaxLogin');
    Route::post('logout', 'LoginController@logout')->name('logout');

    // Registration Routes...
    Route::get('register/', 'RegisterController@showRegistrationForm')->name('register');
    Route::post('register/', 'RegisterController@register');

    // Password Reset Routes...
    Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.request');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm')->name('password.reset');
    Route::post('password/reset', 'ResetPasswordController@reset');
});