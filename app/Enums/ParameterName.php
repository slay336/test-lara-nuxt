<?php

namespace App\Enums;

enum ParameterName: string
{
    case LOCATION = 'location';
    case PHONE = 'phone';
    case EMAIL = 'email';
    case FACEBOOK = 'facebook';
    case TWITTER = 'twitter';
    case LINKEDIN = 'linkedin';
    case INSTAGRAM = 'instagram';
    case BRAND = 'brand';
}
