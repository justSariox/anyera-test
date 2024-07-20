'use client';

import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';

import { SearchPanel } from "@/widgets";

import s from './main.module.scss';

const Main = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }, [controls]);

    const variants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    const searchVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    return (
        <main className={s.mainPage}>
            <div className={s.pageContainer}>
                <motion.div
                    className={s.title}
                    initial="initial"
                    animate="animate"
                    variants={variants}
                >
                    <div className={s.top}>Ut enim ad minim veniam</div>
                    <div>
                        <h1 className={s.h1}>
                            Duis aute irure dolor in reprehenderit
                        </h1>
                    </div>
                    <div className={s.bottom}>
                        Duis aute irure dolor in reprehenderit
                    </div>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={searchVariants}
                >
                    <SearchPanel />
                </motion.div>
            </div>
        </main>
    );
};

export default Main