import React, { useState } from 'react';
import { ChevronLeft24Regular, ChevronRight24Regular, MoreHorizontal24Regular, Search24Regular, Dismiss24Regular, HomeFilled } from "@fluentui/react-icons";
import { FluentProvider, webLightTheme, Theme } from "@fluentui/react-components";
import { Avatar, SearchBox, makeStyles } from '@fluentui/react-components';
import Logo from '../../assets/MESLogo.png';

// Define the style interface
interface StyleProps {
  appLogo: string;
  logoSection: string;
  leftSection: string;
  header: string;
  bodyPadding: string;
  logo: string;
  searchContainer: string;
  mobileSearchButton: string;
  mobileSearchOverlay: string;
  rightSection: string;
  avatar: string;
}

const useStyles = makeStyles({
  appLogo: {
    width: "4vh",
    height: "4vh",
    backgroundColor: "#F15D22",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "& svg": {
      width: "24px",
      height: "24px",
      color: "white",
    },
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    paddingLeft: "16px",
    height: "2.2vh",
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    height: "50px",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '4vh',
    backgroundColor: '#002856',
    color: 'white',
    padding: '0', // Removed padding
    width: '100vw',
    maxWidth: '100%',
    boxSizing: 'border-box',
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
  },
  bodyPadding: {
    paddingTop: '4vh',
  },
  logo: {
    height: '2.2vh',
    width: 'auto',
    '@media (max-width: 480px)': {
      height: '20px',
    },
  },
  searchContainer: {
    position: 'relative',
    width: '200px',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  mobileSearchButton: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      cursor: 'pointer',
      padding: '8px',
    },
  },
  mobileSearchOverlay: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#002856',
      padding: '12px 16px',
      zIndex: 200,
      alignItems: 'center',
      gap: '12px',
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginRight: '16px', // Added right margin
    '@media (max-width: 480px)': {
      gap: '12px',
    },
  },
  avatar: {
    backgroundColor: '#0078D4',
    color: 'white',
    fontSize: '14px',
    width: '3vh',
    height: '3vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 480px)': {
      width: '32px',
      height: '32px',
    },
  },
});

const Header: React.FC = () => {
  const styles = useStyles();
  const [image, setImage] = useState<string | null>(null);
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Create a custom theme type that extends the base Theme
  const customTheme: Theme = {
    ...webLightTheme,
    colorCompoundBrandStroke: "white",
    colorNeutralForeground3: "white",
    colorNeutralStrokeAccessible: "white",
    colorNeutralStrokeAccessibleHover: "white",
  };

  return (
    <FluentProvider theme={customTheme}>
      {showMobileSearch && (
        <div className={styles.mobileSearchOverlay}>
          <SearchBox
            appearance="underline"
            style={{ flex: 1 }}
          />
          <Dismiss24Regular
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={() => setShowMobileSearch(false)}
          />
        </div>
      )}
      
      {/* Fixed Header */}
      <header className={styles.header}>
        <div className={styles.leftSection} style={{ paddingLeft: 0 }}>
          <div className={styles.appLogo}>
            <HomeFilled /> 
          </div>
          <div className={styles.logoSection}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "1.8vh", width: "auto" }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}></div>
        <div className={styles.rightSection}>
          {/* <div className={styles.searchContainer}>
            <SearchBox
              appearance="underline"
              style={{ width: '100%' }}
            />
          </div> */}
          <div
            className={styles.mobileSearchButton}
            onClick={() => setShowMobileSearch(true)}
          >
            <Search24Regular style={{ fontSize: '20px' }} />
          </div>
          <MoreHorizontal24Regular style={{ cursor: 'pointer', color: 'white', fontSize: '20px' }} />
          <div style={{ position: 'relative' }}>
            <Avatar
              className={styles.avatar}
              style={{
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </header>

      {/* Body Padding to Prevent Content Overlapping */}
      <div className={styles.bodyPadding}>
        {/* Main Content Goes Here */}
      </div>
    </FluentProvider>
  );
};

export default Header;