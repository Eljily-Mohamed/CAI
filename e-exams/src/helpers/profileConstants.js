import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faHistory,
  faChartLine,
  faCog,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Composants d'icônes pour chaque section
export const OverviewIcon = () => <FontAwesomeIcon icon={faHome} />;          // Icône pour l'accueil
export const IntegrationIcon = () => <FontAwesomeIcon icon={faCalendarAlt} />; // Icône pour la section "À venir"
export const PlansIcon = () => <FontAwesomeIcon icon={faHistory} />;           // Icône pour l'historique
export const TransactionsIcon = () => <FontAwesomeIcon icon={faChartLine} />;  // Icône pour les statistiques
export const SettingsIcon = () => <FontAwesomeIcon icon={faCog} />;            // Icône pour les réglages
export const ContactIcon = () => <FontAwesomeIcon icon={faEnvelope} />;        // Icône pour la section contact

// Objet de l'état initial du profil de l'utilisateur
export const initialProfileState = {
  phone: "+33 74500235",        // Numéro de téléphone par défaut
  address: "Kingston",          // Adresse par défaut
  postal: "5236",               // Code postal par défaut
  city: "Kiffa",                // Ville par défaut
  country: "Mauritanienne",     // Pays par défaut
  newPassword: "",              // Nouveau mot de passe (vide par défaut)
  confirmPassword: "",          // Confirmation du mot de passe (vide par défaut)
  tempPhone: "+33 74500235",    // Champ temporaire pour le téléphone
  tempAddress: "Kingston",      // Champ temporaire pour l'adresse
  tempPostal: "5236",           // Champ temporaire pour le code postal
  tempCity: "Kiffa",            // Champ temporaire pour la ville
  tempCountry: "Mauritanienne", // Champ temporaire pour le pays
  success: false,               // Indicateur de succès pour sauvegarde des modifications
};
