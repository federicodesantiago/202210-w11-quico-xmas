import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { AppRoutes } from '../routes/app.routes';

export function Layout() {
    return (
        <>
            <Header></Header>
            <main>
                <section className="form_Personal">
                    <AppRoutes></AppRoutes>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}
