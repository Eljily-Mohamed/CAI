import React from 'react';

export function PrivacyPolicy(){
  return (
    <div className="p-8 bg-gray-100 min-h-screen text-gray-800">
      {/* Titre de la page de politique de confidentialité */}
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Politique de Confidentialité</h1>
      {/* Date de la dernière mise à jour */}
      <p className="mb-4 text-gray-600">Dernière mise à jour : <span className="font-semibold">27/10/2024</span></p>

      {/* Section sur les informations collectées */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Informations que Nous Collectons</h2>
        <p className="text-gray-700">
          Nous collectons différents types d'informations pour fournir et améliorer notre service, y compris :
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Informations Fournies par Vous :</strong> Votre nom, adresse e-mail, numéro de téléphone et autres informations.</li>
          <li><strong>Données de Navigation :</strong> Adresse IP, type de navigateur, pages visitées, durée de visite, et autres informations de navigation.</li>
        </ul>
      </section>

      {/* Section sur l'utilisation des informations collectées */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Utilisation de Vos Informations</h2>
        <p className="text-gray-700">
          Nous utilisons vos données pour :
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Améliorer l'expérience utilisateur et optimiser notre site web.</li>
          <li>Répondre aux demandes de service ou aux questions.</li>
          <li>Envoyer des mises à jour importantes et des informations, si vous y avez consenti.</li>
        </ul>
      </section>

      {/* Section sur le partage des données */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Partage des Données</h2>
        <p className="text-gray-700">
          Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos informations dans les cas suivants :
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Avec des Prestataires de Services Tiers :</strong> Pour aider à l'exploitation du site (par exemple, hébergement, analyse de données).</li>
          <li><strong>Conformité Légale :</strong> Lorsque la loi l'exige ou pour protéger nos droits.</li>
        </ul>
      </section>

      {/* Section sur la sécurité des données */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Sécurité des Données</h2>
        <p className="text-gray-700">
          Nous prenons des mesures raisonnables pour sécuriser vos informations, mais rappelez-vous qu'aucune transmission sur Internet n'est complètement sécurisée.
        </p>
      </section>

      {/* Section sur les droits de l'utilisateur */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Vos Droits</h2>
        <p className="text-gray-700">
          Vous avez le droit d'accéder à, de corriger ou de supprimer vos données personnelles. <a href="/contact" className="text-indigo-600 font-semibold"> Contactez-nous </a> pour exercer ces droits.
        </p>
      </section>

      {/* Section sur l'utilisation des cookies */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Cookies</h2>
        <p className="text-gray-700">
          Nous pouvons utiliser des cookies pour améliorer votre expérience. Vous pouvez désactiver les cookies dans votre navigateur, mais certaines fonctionnalités peuvent ne pas fonctionner comme prévu.
        </p>
      </section>

      {/* Section sur les modifications de la politique */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Modifications de la Politique</h2>
        <p className="text-gray-700">
          Nous pouvons mettre à jour cette politique périodiquement. Les changements seront publiés ici avec une date mise à jour.
        </p>
      </section>

      {/* Section de contact pour questions relatives à la politique */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Contactez-Nous</h2>
        <p className="text-gray-700">
          Pour toute question concernant cette politique, <a href="/contact" className="text-indigo-600 font-semibold">contactez-nous</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
