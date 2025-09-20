export default function MainServices() {
  return (
    <section className="section-service bg-gray-100">
      {/* Removed px-4 sm:px-6 lg:px-8 for full-width display */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-none shadow-md">
            <div className="flex items-start">
              <img
                src="/assets2/icons/service-01.png"
                alt="Webcam Security"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Webcam Security</h4>
                <p className="text-gray-600">
                  Access complete visibility through your phone or device. We provide a complete range of security solutions, day and night vision to improve security & enhance capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-red-500 text-white p-6 rounded-none shadow-md">
            <div className="flex items-start">
              <img
                src="/assets2/icons/service-02.png"
                alt="Security Guard"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold mb-2">Security Guard</h4>
                <p>
                  Alarm services to suit the right environment. From wired to wireless systems, Remote Monitored and Integrating systems. We install all alarms to suit the need of the location.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-none shadow-md">
            <div className="flex items-start">
              <img
                src="/assets2/icons/service-03.png"
                alt="Motivated Guards"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Motivated Guards</h4>
                <p className="text-gray-600">
                  Combining identification technology with security solutions to give you a high level of protection, whether your business has a single or multi-site entry points.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-red-500 text-white p-6 rounded-none shadow-md">
            <div className="flex items-start">
              <img
                src="/assets2/icons/service-04.png"
                alt="24/7 Services"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold mb-2">24/7 Services</h4>
                <p>
                  We offer & manage ongoing maintenance of your security systems. Keeping it working as it should be and keeping up with improvements that can be made.
                </p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-none shadow-md">
            <div className="flex items-start">
              <img
                src="/assets2/icons/service-02.png"
                alt="Alarm Monitoring"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Alarm Monitoring</h4>
                <p className="text-gray-600">
                  Real-time monitoring of alarms with immediate alerts and quick response coordination to secure your premises around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
