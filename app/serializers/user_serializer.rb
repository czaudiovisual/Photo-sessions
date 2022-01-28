class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_profile, :username, :password_digest
end
