<!DOCTYPE html>
<html>
<head lang="zh-CN">
    <title>登录</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/themes/global/css/bootstrap.css">

    <!-- 字体图标 CSS -->
    <link rel="stylesheet" href="/fonts/font-awesome/font-awesome.css">

    <!-- Site CSS -->
    <link rel="stylesheet" href="/themes/base/css/site.css" id="admui-siteStyle">

    <!-- 插件 CSS -->
    <link rel="stylesheet" href="/vendor/animsition/animsition.css">

    <!-- Page CSS -->
    <link rel="stylesheet" href="/css/login.css">

    <!--[if lt IE 10]>
    <script src="/vendor/media-match/media.match.min.js"></script>
    <script src="/vendor/respond/respond.min.js"></script>
    <![endif]-->

</head>
<body class="page-locked layout-full page-dark">
<div class="page animation-fade vertical-align text-center animsition-fade h-full">
    <div class="page-content vertical-align-middle">
        <div class="avatar avatar-lg">
            <img src="/images/avatar.svg" alt="Admui">
        </div>
        <form method="post" role="form">
            <div class="form-group">
                <div class="input-group">
                    <input type="text" class="form-control last" name="username"
                           placeholder="用户名">
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <input type="password" class="form-control last" id="inputPassword" name="password"
                           placeholder="密码">
                    <span class="input-group-append">
                    <button type="submit" class="btn btn-primary">
                        <i class="icon fa-paper-plane" aria-hidden="true"></i>
                        <span class="sr-only">登录</span>
                    </button>
                </span>
                </div>
            </div>
        </form>
    </div>
</div>
</body>
</html>