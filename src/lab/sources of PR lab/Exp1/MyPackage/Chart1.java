package MyPackage;

import java.awt.Font;
import java.awt.geom.Point2D;
import java.awt.geom.Point2D.Double;
import javax.swing.JLabel;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.annotations.XYTextAnnotation;
import org.jfree.chart.event.ChartProgressEvent;
import org.jfree.chart.event.ChartProgressListener;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.chart.plot.XYPlot;
import org.jfree.chart.title.LegendTitle;
import org.jfree.data.xy.XYSeriesCollection;

public class Chart1
  extends JFreeChart
  implements ChartProgressListener
{
  private Point2D prev;
  private JLabel p;
  
  Chart1(XYSeriesCollection xyDataset, String f1, String f2, JLabel root)
  {
    super(ChartFactory.createScatterPlot("Feature Plot", f1, f2, xyDataset, PlotOrientation.HORIZONTAL, false, false, false).getPlot());
    this.prev = new Point2D.Double(0.0D, 0.0D);
    XYPlot plot = (XYPlot)getPlot();
    getLegend().setItemFont(new Font("SansSerif", 1, 14));
    plot.setDomainCrosshairVisible(true);
    plot.setRangeCrosshairVisible(true);
    plot.setDomainCrosshairLockedOnData(true);
    plot.setRangeCrosshairLockedOnData(true);
    this.p = root;
    addProgressListener(this);
  }
  
  public void chartProgress(ChartProgressEvent event)
  {
    if (this != null)
    {
      XYPlot plot = (XYPlot)getPlot();
      double xx = plot.getDomainCrosshairValue();
      double yy = plot.getRangeCrosshairValue();
      Point2D new_pt = new Point2D.Double(xx, yy);
      if (!new_pt.equals(this.prev))
      {
        XYTextAnnotation ta = new XYTextAnnotation(xx + "," + yy, 0.0D, 1.0D);
        plot.addAnnotation(ta);
        this.p.setText("F1:" + xx + " F2:" + yy);
        this.prev.setLocation(new_pt);
      }
    }
  }
  
  public void mark(double x1, double x2)
  {
    if (this != null)
    {
      XYPlot plot = (XYPlot)getPlot();
      plot.setDomainCrosshairValue(x1);
      plot.setRangeCrosshairValue(x2);
    }
  }
}
