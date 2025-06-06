import ReseravtionMenu from "@/components/ReservationMenu";
import styles from './reservations.module.css'

export default function ReservationLayout( {children} : {children:React.ReactNode}){
    return (
        <div className={styles.sectionlayout}>
            <ReseravtionMenu/>
            {children}
        </div>
    );
}