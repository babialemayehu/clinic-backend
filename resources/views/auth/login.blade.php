@extends('layouts.app')
@section('content')
<sction class="valign-wrapper" >
    <div class="container">
        <div class="row" ng-controller="LoginControler" >
            <div class="col s12 m3 l3"></div>
            <div class="col s12 m6 l6 card-panel" style="padding:0;margin-top:8%;" ng-init="credintial._token= '{{csrf_token()}}'">
                <div ng-show="loading" class="progress" style="margin-top:0px">
                    <div class="indeterminate"></div>
                </div>
                <div class="container" ng-class="{translucent: loading}" style="padding:8% 0 8% 0;">
                    <h5 style="margin-bottom: 8%">Login</h5>
                    <div class="alert red-text" ng-show='invlidlogin' style="padding-bottom: .2em" >
                        <p>@{{errorMessage}}</p>
                    </div>
                    <form name="loginForm" ng-submit="submit()" novalidate >
                        <div class="input-field">
                            <input id="user-name" ng-blur="validate()" ng-model="credintial.worker_id" type="text" class="validate" name="worker_id" ng-required="true" autofocus style="margin-bottom: .5em;">
                            <label for="user-name">worker_id</label>
                            <span ng-show="loginForm.worker_id.$invalid && loginForm.worker_id.$touched"class="helper-text red-text" style="font-size: 0.9em; ">Username field can't be empty</span>
                        </div>
                        <div class="input-field">
                            <input id="password" ng-model="credintial.password" type="password" class="validate" name="password" ng-required="true" style="margin-bottom: .5em;">
                            <label for="password">Password</label>
                            <span ng-show="loginForm.password.$invalid && loginForm.password.$touched" class="helper-text red-text" style="font-size: 0.9em; " >Password field can't be empty</span>
                        </div>
                        <p>
                            <input class="form-check-input" ng-model="credintial.remember" type="checkbox" name="remember" id="remember">
                            <label class="form-check-label" for="remember">
                                {{ __('Remember Me') }}
                            </label>
                        </p>
                        <div class="right-align">
                            <button type="submit" class="btn waves-effect waves-light blue" ng-disabled="!(loginForm.$valid && loginForm.$dirty)">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
