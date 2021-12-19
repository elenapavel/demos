const isProduction = process.env.NODE_ENV === 'production';

export const PUBLIC_URL = 'https://elenapavel.github.io/demos';

export const base = isProduction ? '/demos' : '';
// export const base = '/demos/'
