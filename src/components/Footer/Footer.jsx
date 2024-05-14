import React from 'react';
import styles from './Footer.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h2 className={styles.footer__header}>INFORMATION</h2>
        
        <div className={styles.footer__wraper}>
			<div className={`${styles.footer__bigflex} ${styles.bigflex}`}>
		
				<div className={`${styles.bigflex__smallflex} ${styles.smallflex}`}>
					<Link to="" target="blank" className={styles.smallflex__item}>© Copyright 2024 UpTalent</Link>
				</div>
				
				<div className={`${styles.bigflex__smallflex} ${styles.smallflex}`}>
					<Link to="" className={styles.smallflex__item}>Kharkiv, 61166, Ukraine</Link>
					<Link to="" className={styles.smallflex__item}>Nauky Ave. 14</Link>
					<Link to="" className={styles.smallflex__item}>+380-57-702-1013</Link>
					<Link to="" className={styles.smallflex__item}>info@nure.ua</Link>
				</div>
				
				<div className={`${styles.bigflex__smallflex} ${styles.smallflex}`}>
					<Link to="" className={styles.smallflex__item}><LinkedInIcon/></Link>
					<Link to="" className={styles.smallflex__item}><FacebookIcon/></Link>
					<Link to="" className={styles.smallflex__item}><TwitterIcon/></Link>
				</div>
			
			</div>
    	</div>
		</footer>
	);
};
