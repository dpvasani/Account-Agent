import { useState, useEffect } from 'react';
import { Card, Row, Col, Statistic, DatePicker, Spin } from 'antd';
import { request } from '@/request';
import useLanguage from '@/locale/useLanguage';
import { useMoney } from '@/settings';

const { RangePicker } = DatePicker;

export default function Report() {
  const translate = useLanguage();
  const money = useMoney();
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState({
    paidInvoice: 0,
    unpaidInvoice: 0,
    proformaInvoice: 0,
    offer: 0,
  });

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    setLoading(true);
    try {
      // Fetch invoice summary
      const invoiceResponse = await request.summary({ entity: 'invoice' });
      const quoteResponse = await request.summary({ entity: 'quote' });
      
      if (invoiceResponse.success) {
        setReportData((prev) => ({
          ...prev,
          paidInvoice: invoiceResponse.result?.paid || 0,
          unpaidInvoice: invoiceResponse.result?.unpaid || 0,
        }));
      }

      if (quoteResponse.success) {
        setReportData((prev) => ({
          ...prev,
          offer: quoteResponse.result?.total || 0,
        }));
      }
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
    setLoading(false);
  };

  const formatMoney = (amount) => {
    return `${amount.toFixed(2)} ${money.currency_symbol}`;
  };

  return (
    <div style={{ padding: '24px' }}>
      <Spin spinning={loading}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title={translate('paid_invoice')}
                value={reportData.paidInvoice}
                formatter={(value) => formatMoney(value)}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title={translate('unpaid_invoice')}
                value={reportData.unpaidInvoice}
                formatter={(value) => formatMoney(value)}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title={translate('proforma_invoice')}
                value={reportData.proformaInvoice}
                formatter={(value) => formatMoney(value)}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title={translate('offer')}
                value={reportData.offer}
                formatter={(value) => formatMoney(value)}
              />
            </Card>
          </Col>
        </Row>
      </Spin>
    </div>
  );
}
