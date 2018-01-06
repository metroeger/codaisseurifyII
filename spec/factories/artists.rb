FactoryBot.define do
  factory :artist do
    name         "Nina"
    photo         "Shared"

    trait :active do
      active true
    end

    trait :inactive do
      active false
    end
  end
end
