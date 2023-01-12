import { MenuItems } from '../../types/menu.items';
import { robotType } from '../../types/robot.type';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';
import { AppRoutes } from '../routes/app.routes';

export function Layout({
    items,
    robots,
    handleAdd,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    items: MenuItems;
    robots: Array<robotType>;
    handleAdd: (robot: robotType) => void;
    handleUpdate: (robot: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
}) {
    return (
        <>
            <Header>
                <Menu items={items}></Menu>
            </Header>
            <main>
                <section className="form_Personal">
                    <AppRoutes
                        items={items}
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
