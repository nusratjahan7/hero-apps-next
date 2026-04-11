export const metadata = {
  title: "Installation",
};

const Installation = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <h2>Installation</h2>
        </div>
    );
};

export default Installation;