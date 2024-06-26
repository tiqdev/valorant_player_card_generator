import store from "..";
import {
  _getAgents,
  _getPlayerCards,
  _getTiers,
  _getTitles,
  _setCardPreview,
  _setFormData,
  _setIsPng,
  _setLanguages,
  _setLoading,
  _setSelectedLanguage,
  _setSheetOpen,
} from ".";

export const setIsLoading = (isLoading) => {
  store.dispatch(_setLoading(isLoading));
};

export const setSelectedLanguage = (language) => {
  let selectedLanguage = store
    .getState()
    .main.languages.find((lang) => lang.name === language);

  const selectedLanguageJson = JSON.stringify(selectedLanguage);
  localStorage.setItem("selectedLanguage", selectedLanguageJson);

  store.dispatch(_setSelectedLanguage(selectedLanguage));
};

export const setLanguages = (languages) => {
  store.dispatch(_setLanguages(languages));
};

export const setCardPreview = (cardPreview) => {
  store.dispatch(_setCardPreview(cardPreview));
};

export const setFormData = (formData) => {
  store.dispatch(_setFormData(formData));
};

export const getTitles = async () => {
  store.dispatch(_getTitles());
};

export const getPlayerCards = async () => {
  store.dispatch(_getPlayerCards());
};

export const getAgents = async () => {
  store.dispatch(_getAgents());
};

export const getTiers = async () => {
  store.dispatch(_getTiers());
};

export const setSheetOpen = (isOpen) => {
  store.dispatch(_setSheetOpen(isOpen));
};

export const setIsPng = (isPng) => {
  store.dispatch(_setIsPng(isPng));
};
