class UserMailer < ApplicationMailer
  default from: "lipetsk.prime@yandex.ru"
 
  def welcome_email(message)
    @message = message
    @url = 'http://лада-прайм.рф'
    mail(to: 'prime.lipetsk@yandex.ru', subject: 'LADA-PRIME message')
  end
end
