// Importation des modules nécessaires depuis React et autres dépendances
import React, { useState } from "react";
import Select from 'react-select';
import RightSidebar from "../components/RightSideBar"; // Composant pour la barre latérale droite
import LeftSidebar from "../components/LeftSidebar.js"; // Composant pour la barre latérale gauche
import Header from "../components/Header"; // Composant pour l'en-tête
import { useAuth } from '../contexts/AuthContext'; // Utilisation du contexte d'authentification
// Importation d'icônes et d'options depuis le module de constantes
import {
  OverviewIcon,
  IntegrationIcon,
  PlansIcon,
  TransactionsIcon,
  SettingsIcon,
  ContactIcon,
  countryOptions
} from "../helpers/contactConstants";

// Déclaration de la fonction principale du composant Contact
export function Contact() {
  const activeChild = 'Contact'; // Élément actif dans la barre latérale
  const { userName } = useAuth(); // Récupération du nom d'utilisateur depuis le contexte d'authentification

  // Utilisation du hook useState pour gérer les données du formulaire et initialiser chaque champ à vide
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    privacyAccepted: false, // Indicateur pour l'acceptation de la politique de confidentialité
  });

  const [formErrors, setFormErrors] = useState({}); // Gestion des erreurs de validation
  const [formSuccess, setFormSuccess] = useState(false); // Indicateur de succès de soumission du formulaire

  // Fonction de validation du formulaire pour vérifier que tous les champs obligatoires sont remplis
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "Le prénom est requis.";
    if (!formData.lastName) errors.lastName = "Le nom est requis.";
    if (!formData.email) errors.email = "L'email est requis.";
    if (!formData.message) errors.message = "Le message est requis.";
    if (!formData.privacyAccepted) errors.privacyAccepted = "Vous devez accepter la politique de confidentialité.";
    setFormErrors(errors); // Mise à jour des erreurs de formulaire
    setTimeout(() => setFormSuccess(false), 1800); // Réinitialisation de l'indicateur de succès après 1,8 seconde
    return Object.keys(errors).length === 0; // Retourne vrai si aucune erreur
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
    if (validateForm()) { // Si la validation est réussie
      setFormSuccess(true); // Affiche le message de succès
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        privacyAccepted: false,
      }); // Réinitialise les données du formulaire
      setFormErrors({}); // Réinitialise les erreurs de formulaire
    }
  };

  // Fonction de gestion des changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    }); // Met à jour le champ correspondant en fonction du type d'entrée
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/6 flex-shrink-0">
      {/* Affiche la barre latérale gauche avec les icônes */}
      <LeftSidebar activeChild={activeChild}>
          <div href="/Home" name="Accueil" icon={<OverviewIcon />} />
          <div href="/venir" name="À venir" icon={<IntegrationIcon />} />
          <div href="/historique" name="Historique" icon={<PlansIcon />} />
          <div href="/stats" name="Statistiques" icon={<TransactionsIcon />} />
          <div href="/reglages)" name="Réglages" icon={<SettingsIcon />} />
          <div href="/Contact" name="Contact" icon={<ContactIcon />} />
      </LeftSidebar>
      </div>

      <div className="flex flex-col p-[10px] w-[1200px] ml-[70px]">
        <Header name={userName} /> {/* Affiche l'en-tête avec le nom d'utilisateur */}
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nous Contacter</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Vous avez une question ?</p>
          </div>
          {formSuccess && <div className="text-green-600 mb-4">Merci de nous avoir contactés !</div>}
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Prénom */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
                </div>
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nom <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
                </div>
              </div>

              {/* E-mail */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Votre e-mail <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex gap-4">
                    {/* Section pour le code du pays */}
                    <div className="flex-1">
                    <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-900">
                        Code
                    </label>
                    <Select
                        id="country"
                        name="country"
                        options={countryOptions}
                        menuPlacement="bottom"
                        className="w-full rounded-md bg-white py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                        styles={{
                        control: (provided) => ({
                            ...provided,
                            minHeight: '40px',
                            padding: '0',
                        }),
                        }}
                    />
                    </div>

                    {/* Section pour le numéro de téléphone */}
                    <div className="flex-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                        Numéro de téléphone
                    </label>
                    <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Votre numéro"
                        className="w-full mt-2 block rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                    </div>
                </div>

              {/* Message */}
              <div className="sm:col-span-2 mt-4">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                </div>
              </div>
              </div>

              {/* Politique de confidentialité */}
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    id="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <label className="text-sm leading-6 text-gray-600" htmlFor="privacyAccepted">
                  En soumettant ce formulaire, j'accepte notre{" "}
                  <a href="/privacy-policy" className="font-semibold text-indigo-600">
                    politique de confidentialité
                  </a>
                  .
                </label>
                {formErrors.privacyAccepted && <p className="text-red-500 text-sm">{formErrors.privacyAccepted}</p>}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="mt-5">
              <button
                type="submit"
                className="w-10px rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Barre latérale droite */}
      <RightSidebar />
    </div>
  );
}
