const isProduction = process.env.NODE_ENV === 'production';

export const PUBLIC_URL = process.env.npm_package_homepage;

export const base = isProduction ? '/demos' : '';
// export const base = '/demos/'
