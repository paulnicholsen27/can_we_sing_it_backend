class GigSong < ApplicationRecord
    belongs_to :gig 
    belongs_to :song
end
