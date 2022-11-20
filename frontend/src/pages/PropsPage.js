import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Props from "../components/Props";
import UpdateForm from "../components/UpdateForm";
import propsStore from "../stores/propsStore";

export default function PropsPage() {
    const store = propsStore();

    // Use effect
    useEffect(() => {
    store.fetchProps();
    }, []);

    return (
        <div>      
            <Props />
            <UpdateForm />
            <CreateForm />
        </div>
    );
}