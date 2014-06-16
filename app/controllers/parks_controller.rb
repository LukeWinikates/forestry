class ParksController < ApplicationController
  def index
    conn = Faraday.new(:url => 'http://ridb.recreation.gov') do |faraday|
      faraday.request  :url_encoded             # form-encode POST params
      faraday.response :logger                  # log requests to STDOUT
      faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
    end

    response = conn.get 'webservices/RIDBServiceNG.cfc', {:method => 'getAllRecElementsForOrgID', :orgID => 143 }
    doc = Nokogiri::XML(response.body)
    parks = doc.xpath("//arc:FacilityName").map(&:text)
    render json: parks
  end
end