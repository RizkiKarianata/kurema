
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import BeritaPage from '../pages/berita.f7.html';
import ResepPage from '../pages/resep.f7.html';
import AkunPage from '../pages/akun.f7.html';
import KategoriPage from '../pages/kategori.f7.html';
import PencarianPage from '../pages/pencarian.f7.html';
import DetailBeritaPage from '../pages/detail-berita.f7.html';
import DetailResepPage from '../pages/detail-resep.f7.html';
import DetailKategoriPage from '../pages/detail-kategori.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/berita/',
	component: BeritaPage,
},
{
	path: '/resep/',
	component: ResepPage,
},
{
	path: '/akun/',
	component: AkunPage,
},
{
	path: '/kategori/',
	component: KategoriPage,
},
{
	path: '/pencarian/',
	component: PencarianPage,
},
{
	path: '/detail-berita/:tags/:key/',
	component: DetailBeritaPage,
},
{
	path: '/detail-resep/:id/',
	component: DetailResepPage,
},
{
	path: '/detail-kategori/:id/',
	component: DetailKategoriPage,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;