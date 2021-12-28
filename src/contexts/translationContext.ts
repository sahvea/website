import React from 'react';
import { TOneLanguageTranslation, translations } from '../utils/translations';

export const TranslationContext = React.createContext<TOneLanguageTranslation>(translations.en);