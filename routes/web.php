<?php

Route::get('/test', function(){
    return;  
}); 

Route::get('/icon', function(){
    header("location: /css/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2"); 
}); 

Route::middleware(['auth'])->group(function () {
    Route::get('/home', 'HomeController@index')->name('home');
});
Route::prefix('ajax')
->middleware(['cors'])
->group(function(){
    Route::prefix('get')->group(function(){
        Route::namespace('AccountManagment')
        ->group(function(){
            Route::get('roles except admin', 'RoleController@getRolesExceptAdmin');
            Route::get('users', 'UserController@getUsers'); 
            Route::get('total users', 'UserController@totalUsers'); 
            Route::get('auth user', 'UserController@authUser'); 
            Route::get('user profile/{user}', 'UserController@userProfile');
            Route::prefix('user')->group(function(){
                Route::get('total', 'UserController@total'); 
            }); 
        }); 
        Route::namespace('PatientManagment')
        ->group(function(){
            Route::get('departments', 'DepartmentController@index'); 
            Route::get('search/auto complete/{key}', 'PatientController@searchAutoComplete');
            Route::get('search/{key}', 'PatientController@search');    
            Route::prefix('queue')->group(function(){
                Route::get('recent/{id}', 'QueueController@recentVisists'); 
                Route::get('patients in queue', 'QueueController@queuedPatients');
                Route::get('total', 'QueueController@total'); 
                Route::get('served total', 'QueueController@totalServed');
            });
            Route::prefix('patient')->group(function(){
                Route::get('totalNumber', 'PatientController@totalNumber'); 
            }); 
        }); 
    }); 

    Route::prefix('post')->group(function(){
        Route::namespace('AccountManagment')
        ->group(function(){
            Route::post('create user', 'UserController@store'); 
            Route::post('isCurrentPassword', 'UserController@currentPassword'); 
            Route::post('logout', 'UserController@logout'); 
        }); 
         Route::namespace('PatientManagment')
        ->group(function(){
            Route::post('patient/new', 'PatientController@newPatient'); 
            Route::prefix('queue')->group(function(){
                Route::post('add/{patinetId}', 'QueueController@queue'); 
                Route::post('remove/{patinetId}', 'QueueController@dequeue'); 
                Route::get('recent/{id}', 'QueueController@recentVisists'); 
            });
        }); 
    }); 

    Route::prefix('update')->group(function(){
        Route::namespace('AccountManagment')
        ->group(function(){
            Route::put('user', 'UserController@update'); 
            Route::put('password', 'UserController@changePassword'); 
        });        
    }); 

    Route::prefix('delete')->group(function(){
        Route::namespace('AccountManagment')
        ->group(function(){
            Route::delete('user/{id}', 'UserController@destroy');  
        });     
        Route::namespace('PatientManagment')
        ->group(function(){
            Route::delete('patient/{id}', 'PatientController@destroy'); 
            Route::delete('queue/{patientId}', 'QueueController@remove'); 
        }); 
    }); 
    
    Route::prefix('file')->group(function(){
        Route::namespace('AccountManagment')
        ->group(function(){
            Route::post('upload/profile pic', 'UserController@uploadProfilePic');  
        });
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

// FRONT END VIEWS 

Route::middleware(['auth'])->group(function(){
    Route::get("/admin", "FrontendController@admin"); 
});