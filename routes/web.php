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
                Route::get('visits/{id}/{limit}', 'QueueController@visits'); 
                Route::get('patients in queue/{limit}', 'QueueController@queuedPatients');
                Route::get('total', 'QueueController@total'); 
                Route::get('served total', 'QueueController@totalServed');
                Route::get('is in queue/{patient_id}', 'QueueController@isQueued'); 
                Route::get('next', 'QueueController@next'); 
            });
            Route::prefix('patient')->group(function(){
                Route::get('totalNumber', 'PatientController@totalNumber'); 
            }); 
        }); 

        Route::namespace('LaboratoryManagement')->prefix('lab')
        ->group(function(){
            Route::get('search/auto/{key}', 'Test@search_auto'); 
            Route::get('search/{key}', 'Test@search'); 
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

        Route::namespace('LaboratoryManagement')->prefix('lab')
        ->group(function(){
            Route::post('request', 'LaboratoryContorller@request'); 
            Route::post('search/auto/{key}', 'Test@search_auto'); 
            Route::post('search/{key}', 'Test@search'); 
        }); 
    }); 

    Route::prefix('update')->group(function(){
        Route::namespace('AccountManagment')
        ->group(function(){
            Route::put('user', 'UserController@update'); 
            Route::put('password', 'UserController@changePassword'); 
            Route::put('password', 'UserController@changePassword'); 
            Route::put('room number/{room_number}', 'UserController@room_number'); 
        });

        Route::namespace('PatientManagment')
        ->group(function(){
            Route::put('patient/{id}', 'PatientController@update');        
        }); 

        Route::namespace('PatientRecordManagement')->prefix('hisstory')
        ->group(function(){
            Route::put('chief_complient/{hisstory}', 'HisstoryController@chief_complient'); 
            Route::put('metrics/{hisstory}', 'HisstoryController@metrics'); 
            Route::put('status/waiting/{hisstory}', 'HissHisstoryControllertory@waiting_status'); 
        }); 

        Route::namespace('LaboratoryManagment')->prefix('lab')
        ->group(function(){
            Route::put('responce', 'LaboratoryContorller@responce'); 
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
    Route::get("/clurk", "FrontendController@clurk"); 
});  Route::get("/admin", "FrontendController@admin"); 
    Route::get("/clurk", "FrontendController@clurk"); 