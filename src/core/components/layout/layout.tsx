import { robotType } from '../../types/robot.type';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { AppRoutes } from '../routes/app.routes';

export function Layout({
    robots,
    handleAdd,
    handleDelete,
    handleUpdate,
    handleFavourite,
}: {
    robots: Array<robotType>;
    handleAdd: (robot: robotType) => void;
    handleUpdate: (task: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
}) {
    return (
        <>
            <Header></Header>
            <main>
                <section className="form_Personal">
                    <AppRoutes
                        robots={robots}
                        handleAdd={handleAdd}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></AppRoutes>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}
