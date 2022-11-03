let password = 'front23s-s';

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
    alert('Пароль хороший');
} else {
    alert('Пароль лёгкий, придумайте другой');
} 