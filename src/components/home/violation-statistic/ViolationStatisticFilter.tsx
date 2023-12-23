import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {View, TouchableOpacity} from 'components/ui';
import {Caption1, H2, Title2} from 'components/ui/text/Typography';
import BottomSheet from 'components/ui/bottom-sheet/BottomSheet';
import UnitSelect from './UnitSelect';
import ViolationFieldSelect from './ViolationFieldSelect';
import MonthSelect from './MonthSelect';
import YearSelect from './YearSelect';
import {Colors} from 'themes/colors';

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: Colors.neutral3,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});

interface Props {
  unit: {value: string; label: string};
  field: {value: string; label: string};
  time: {month: number; year: number};
  setUnit: (payload: {value: string; label: string}) => void;
  setField: (payload: {value: string; label: string}) => void;
  setTime: (payload: {month: number; year: number}) => void;
}

const ViolationStatisticFilter: FC<Props> = ({
  unit,
  field,
  time,
  setUnit,
  setField,
  setTime,
}) => {
  const {t} = useTranslation('home');

  return (
    <View flex={1} pt={5} pb={8}>
      <H2 center style={{marginBottom: 24}}>
        {t('violationStatisticFilter')}
      </H2>
      <BottomSheet
        renderContent={({onClose}) => (
          <UnitSelect
            value={unit}
            handleClose={onClose}
            handleSelect={value => {
              setUnit(value);
              onClose();
            }}
          />
        )}>
        {({onOpen}) => (
          <TouchableOpacity
            style={[styles.field, {borderTopWidth: 1}]}
            onPress={onOpen}>
            <Title2 mr={2}>{t('unit')}</Title2>
            <Caption1 right style={{flex: 1}}>
              {unit.label}
            </Caption1>
          </TouchableOpacity>
        )}
      </BottomSheet>
      <BottomSheet
        renderContent={({onClose}) => (
          <ViolationFieldSelect
            value={field}
            handleClose={onClose}
            handleSelect={value => {
              setField(value);
              onClose();
            }}
          />
        )}>
        {({onOpen}) => (
          <TouchableOpacity style={styles.field} onPress={onOpen}>
            <Title2 mr={2}>{t('violationField')}</Title2>
            <Caption1 right style={{flex: 1}}>
              {field.label}
            </Caption1>
          </TouchableOpacity>
        )}
      </BottomSheet>
      <BottomSheet
        renderContent={({onClose}) => (
          <MonthSelect
            value={time.month}
            handleClose={onClose}
            handleSelect={value => {
              setTime({...time, month: value});
              onClose();
            }}
          />
        )}>
        {({onOpen}) => (
          <TouchableOpacity style={styles.field} onPress={onOpen}>
            <Title2 mr={2}>{t('month')}</Title2>
            <Caption1 right style={{flex: 1}}>
              {t('monthNumber', {month: time.month})}
            </Caption1>
          </TouchableOpacity>
        )}
      </BottomSheet>
      <BottomSheet
        renderContent={({onClose}) => (
          <YearSelect
            value={time.year}
            handleClose={onClose}
            handleSelect={value => {
              setTime({...time, year: value});
              onClose();
            }}
          />
        )}>
        {({onOpen}) => (
          <TouchableOpacity style={styles.field} onPress={onOpen}>
            <Title2 mr={2}>{t('year')}</Title2>
            <Caption1 right style={{flex: 1}}>
              {t('yearNumber', {year: time.year})}
            </Caption1>
          </TouchableOpacity>
        )}
      </BottomSheet>
    </View>
  );
};

export default ViolationStatisticFilter;
