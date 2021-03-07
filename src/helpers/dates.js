import moment from 'moment'

export const formatDate = (dateTime) => {
  if (moment(dateTime).isValid) {
    if (moment(dateTime).isSame(moment(), 'day')) {
      return moment(dateTime).format('dddd, HH:mm')
    }

    return moment(dateTime).format('L')
  }

  return '-'
}
