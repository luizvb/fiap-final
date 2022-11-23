//
//  WeddingService.swift
//  WeddingApp
//
//  Created by Cora on 21/11/22.
//

import Foundation

struct Wedding: Decodable {
    let status: String
    let url: String
}

class WeddingService {
    func makeRequest(completion: @escaping ([Wedding]) -> Void) {
        let url = URL(string: "http://ec2-54-175-45-141.compute-1.amazonaws.com:8080/api/v1/images")!
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        let task = URLSession.shared.dataTask(with: request) { (data, response, error) in

                if let error = error {

                    print("Error took place \(error)")

                    return

                }

                

                // Read HTTP Response Status code

                if let response = response as? HTTPURLResponse {

                    print("Response HTTP Status code: \(response.statusCode)")

                }

                

                //convert HTTP data - json to struct

                let decoder = JSONDecoder()



                do {

                    let wedding = try decoder.decode([Wedding].self, from: data!)

                    completion(wedding)

                } catch {

                    print(error.localizedDescription)

                }

                

            }

            task.resume()

    }
}
